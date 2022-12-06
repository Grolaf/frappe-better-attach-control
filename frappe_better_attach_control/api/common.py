# Frappe Better Attach Control © 2022
# Author:  Ameen Ahmed
# Company: Level Up Marketing & Software Development Services
# Licence: Please refer to LICENSE file


import json

import frappe
from frappe import _, _dict


def error(msg, throw=True):
    title = "Better Attach Control"
    frappe.log_error(title, msg)
    if throw:
        frappe.throw(msg, title=title)


def get_cached_value(dt, filters, field, as_dict=False):
    _as_dict = as_dict
    
    if isinstance(filters, str):
        if as_dict and isinstance(field, str):
            as_dict = False
        
        val = frappe.get_cached_value(dt, filters, field, as_dict=as_dict)
        if val and isinstance(val, list) and not isinstance(field, list):
            val = val.pop()
    else:
        val = frappe.db.get_value(dt, filters, field, as_dict=as_dict)
    
    if not val:
        error(_("Unable to get the value or values of {0} from {1}, filtered by {2}").format(
            to_json_if_valid(field),
            dt,
            to_json_if_valid(
                filters.keys() if isinstance(filters, dict) else filters
            )
        ))
    
    if _as_dict and not isinstance(val, dict):
        if isinstance(field, list) and isinstance(val, list):
            val = _dict(zip(field, val))
        elif isinstance(field, str):
            val = _dict(zip([field], [val]))
    
    return val


def to_json_if_valid(data, default=None):
    if not data:
        return data
    
    if default is None:
        default = data
    
    try:
        return json.dumps(data)
    except Exception:
        return default


def parse_json_if_valid(data, default=None):
    if not data:
        return data
    
    if default is None:
        default = data
    
    try:
        return json.loads(data)
    except Exception:
        return default